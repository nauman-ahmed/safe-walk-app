import logo from '../logo.svg';
import '../App.css';
import Map from '../Components/Map/Map';
import { useEffect, useState } from 'react';
import AutoComplete from '../Components/AutoComplete/AutoComplete';
import { LoadScript, DirectionsService, } from '@react-google-maps/api';
import { registerUser, loginUser, UpdateUser, createTrip, sendText } from "../API/api"
import { setAuthToken } from "../API/setCommonHeader"
import { getAddressFromLatLong } from "../userServices/service"
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import  Header from "../Components/ui/map"
import { ToastContainer, toast } from 'react-toastify';
import  Footer from "../Components/ui/footer"

function Location() {

  const navigate = useNavigate()
  const [originLatLng, setOriginLatLng] = useState({ lat: 0, lng: 0 });
  let myRoute = null;
  
  const [addresses, setAddressess] = useState([]);
  const [destinationLatLng, setDestinationLatLng] = useState({ lat: 0, lng: 0 });
  const [empty, setEmpty] = useState(false);
  const [duration, setDuration] = useState();
  const [addAddress, setAddAddress] = useState(false);
  const [destinationAddress, setDestination] = useState('');
  const [addressToState, setAddressToState] = useState(false);
  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationTrips, setDestinationTrips] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);
  
  const checkAuth = async () => {
    let flag = false;
    localStorage.getItem("authorization") ? flag=true : flag=false

    if(flag){
      const add = await getAddressFromLatLong(originLatLng.lat,originLatLng.lng)
      setSourceAddress(add)
      setAuthToken(localStorage.getItem("authorization"))
    }else{
      navigate('/');
    }

  }

  useEffect(()=>{
    if(originLatLng.lat){
      checkAuth()
    }
  },[originLatLng,addAddress])

  useEffect(() => {

    // registerUser({
    //   email:"naumanahmed449@gmail.com",
    //   password:"nauman123",
    //   firstName:"Nauman",
    //   lastName:"Ahmed"
    // }).then((res)=>{
    //   if(res == "Successfully created"){
    //     console.log("Successfully created")
    //   }else{
    //     console.log("ERROR")
    //   }
    // })


    // UpdateUser({
    //     email:"naumanahmed449@gmail.com",
    //     password:"nauman123",
    //     firstName:"Ahmed",
    //     lastName:"Nauman"
    // }).then((res)=>{
    //   if(res == "successfully Updated"){
    //     console.log("SUCCESSFULLY REGISTERED",res)
    //   }else{
    //     console.log("ERROR")
    //   }
    // })

    let flag = false;
    localStorage.getItem("authorization") ? flag=true : flag=false

    if(flag){
      navigator.geolocation.getCurrentPosition(
        position => {
          
          setOriginLatLng({ lat: position.coords.latitude, lng: position.coords.longitude })
  
          // myLocation = { lat: position.coords.latitude, lng: position.coords.longitude }
        },
        error => {
          console.error("Error getting location: ", error);
        }
      );
    }else{
      navigate('/');
    }

    
    // CrimeMeter()
  }, []);

  useEffect(()=>{
    let flag = false;
    localStorage.getItem("authorization") ? flag=true : flag=false

    if(flag){
      if(addressToState){
        handleCalculateDistance()
      }
    }else{
      navigate('/');
    }
  },[addressToState])

  const sendtextHandler = (text = null) => {
    const phoneNumber = localStorage.getItem("mobileNumber");
    sendText({phoneNumber}).then((res)=> {
      if(res == "Error In Sending Message"){
        toast.error("Error In Sending Message")
        return
      }
      toast.success("Successfully Sent a Message")
    })
  }

  const startTimer = () => {
    console.log("TIMER HAS BEEN STARTED")
    if(timeoutId){
      clearTimer()
    }

    let temp = []

    addresses.map((add) => temp.push(add.durationValue))

    let sum = 0;

    for (let num of temp){

        sum = sum + num
    }

    const timerId = setTimeout(() => {
      sendtextHandler("TIMER")
    }, sum * 2 * 1000); // 20 minutes in milliseconds

    setTimeoutId(timerId);
  };

  // Function to clear the timer when directions are completed
  const clearTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  // Watch for changes in directionsInProgress
  useEffect(() => {
    if (addresses.length > 0) {
      startTimer();
    } 
  }, [addresses]);

  const handleAddAddressDialoge = () => {
    setEmpty(true)
    setAddAddress(true)
  }

  const handleSetAddress = (address) => {
    setDestination(address)
  }

  const handleDestinationLatLng = (lat, lng) => {
    setDestinationLatLng({ lat, lng });
  }

  // useEffect(() => {
  //   console.log(addresses, '  address to show');
  // }, [addresses])

  const [distance, setDistance] = useState('');
  const [directionToRoute, setDirectionToRoute] = useState(null);

  const destinationTripsHandler = async (lat,lng) => {
    const add = await getAddressFromLatLong(lat,lng)
    if (isEdit) {
      let temp = [...destinationTrips]
      temp.splice(selectedItem,1,add)
      setDestinationTrips(temp)
      console.log("Address: Nauman isEdit ", temp);
    }else{
      setDestinationTrips([...destinationTrips,add])
      console.log("Address: Nauman Else ", destinationTrips);
    }
  }

  const handleCalculateDistance = () => {
    const origin =  new window.google.maps.LatLng(originLatLng.lat, originLatLng.lng); // Replace with actual origin latlng
    const destination =  new window.google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng); // Replace with actual destination latlng

    destinationTripsHandler(destinationLatLng.lat, destinationLatLng.lng)
    
    const service =  new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: 'WALKING', // or 'DRIVING', 'BICYCLING', 'TRANSIT'
      },
      async (response, status) => {
        if (status === 'OK' && response.rows[0].elements[0]) {

          await handleDrawRoute();

          setDistance(response.rows[0].elements[0].distance.text);
          setDuration(response.rows[0].elements[0].duration.text);

          setAddAddress(false);
          setAddressToState(false);

          if (isEdit) {
            const updateAddresses = addresses;
            const obj = { direction: myRoute, destinationAddress: destinationAddress, distance: response.rows[0].elements[0].distance.text, duration: response.rows[0].elements[0].duration.text,durationValue: response.rows[0].elements[0].duration.value, originLatLng, destinationLatLng }
            updateAddresses[selectedItem] = obj
            setAddressess(updateAddresses);
            if (addresses && addresses.length > 0) {
              setSelectedItem(addresses.length)
            }
          } else {
            console.log("destinationTripsHandler",response.rows[0])
            setAddressess([...addresses, { direction: myRoute, destinationAddress: destinationAddress, distance: response.rows[0].elements[0].distance.text, duration: response.rows[0].elements[0].duration.text,durationValue: response.rows[0].elements[0].duration.value, originLatLng, destinationLatLng }])
            if (addresses && addresses.length > 0) {
              setSelectedItem(addresses.length)
            }
          }
          setDirectionToRoute(null);

        } else {
          console.error('Distance Matrix request failed:', status);
        }
      }
    );
  };


  const handleDrawRoute = async () => {
    const origin =  new window.google.maps.LatLng(originLatLng.lat, originLatLng.lng); // Replace with actual origin latlng
    const destination =  new window.google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng); // Replace with actual destination latlng

    const directionsRenderer =  new window.google.maps.DirectionsRenderer();
    const directionsService =  new window.google.maps.DirectionsService();
    directionsRenderer.setPanel(document.getElementById("directions-panel"));
    await directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: 'WALKING', // or 'DRIVING', 'BICYCLING', 'TRANSIT'
      },
      (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
          myRoute = result;
        } else {
          console.error('Directions request failed:', status);
        }
      }
    );
  };

  const [selectedItem, setSelectedItem] = useState(0);

  const handleSelectItem = (i) => {
    setSelectedItem(i);
  }

  const [isEdit, setEdit] = useState(false);

  const handleDeleteItem = () => {
    
    let temp = [...destinationTrips]
    temp.splice(selectedItem,1)
    setDestinationTrips(temp)

    const arr = addresses;
    arr.splice(selectedItem, 1);
    setAddressess(arr);
    setAddAddress(false);
    setEmpty(false)
  }

  const tripsDestinationHandler = () => {
    let storageData = localStorage.getItem("authorization")
    let details = decodeToken(storageData)
    createTrip({details,sourceAddress, destinationTrips})
    setAddAddress(false)
    setEmpty(false)
    setAddressess([])
    toast.success("Successfully End of Trip")
  }

  if(!localStorage.getItem("authorization")){
    return navigate('/');
  }else{
    return (
      <LoadScript googleMapsApiKey="AIzaSyB5uijdNdiYHE6vfZO_aFNb-Lq_pjZxMVA" libraries={["places"]}>
        <ToastContainer/>
        <div className="App"> 
          {/* <svg className="hide">
            <defs>
              <symbol id="commutes-add-icon">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </symbol>
            </defs>
            <use href="#commutes-add-icon" />
          </svg> */}
          <main className="commutes">
            <Header/>
            <div style={{ position: "relative", display:"flex" }}>
              <div style={addresses.length > 0 ? { width: '60%' } : { width: '100%' }}>
                <Map myLocation={originLatLng} addresses={addresses} selectedItem={selectedItem} handleSelectItem={(i) => handleSelectItem(i)} />
              </div>
              <div style={addresses.length > 0 ? { width: '40%',position: "relative" } : { display: 'none',position: "relative" }}>
                <div id="directions-panel"></div>
                <div style={{ display:"flex", width: "100%", justifyContent: "space-evenly" }}>
                  <button                  
                    className="py-2 px-5 bg-red-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300" 
                    onClick={tripsDestinationHandler}>
                  End
                  </button>
                  <button 
                    className="py-2 px-5 bg-green-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300" 
                    onClick={sendtextHandler}>
                    {localStorage.getItem("mobileNumber") ? "Contact  " + localStorage.getItem("mobileNumber") : "Contact" }
                  </button>
                </div>
              </div>
            </div>
            <div className="commutes-info">
              <div className="commutes-initial-state max-w-6xl mx-auto flex-col sm:flex-row" style={{ display: `${addresses.length > 0 ? 'none' : 'flex'}` }}>
                <div className="description">
                  <h1 className="heading">find your safe walk home</h1>
                  <p>see travel time, directions, and zones to avoid</p>
                </div>
                <button className="add-button mt-4 self-start sm:self-center sm:mt-0" onClick={() => handleAddAddressDialoge()}>
                  <svg
                    aria-label="Add Icon"
                    width="24px"
                    height="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#commutes-add-icon" />
                  </svg>
                  <span className="label">home</span>
                </button>
              </div>
  
              <div className="commutes-destinations" style={{ display: `${addresses.length > 0 ? 'flex' : 'none'}` }}>
                <div className="destinations-container">
                  <div className="destination-list">
                    {addresses.map((item, i) => {
                      return (
                        <div className={`destination ${selectedItem == i ? 'active' : ''}`} onClick={() => handleSelectItem(i)} tabIndex={i} role="button">
                          <div className="destination-content">
                            <div className="metadata">{item.distance}</div>
                            <div className="address">To <abbr title={item.destinationAddress}>{item.destinationAddress}</abbr></div>
                            <div className="destination-eta">{item.duration}</div>
                          </div>
                          <div className="destination-controls">
                            <button onClick={() => { handleSelectItem(i); handleAddAddressDialoge(); setEdit(true); }} className="edit-button" aria-label="Edit Destination">
                              Edit
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <button onClick={() => handleAddAddressDialoge()} className="add-button">
                    <svg
                      aria-label="Add Icon"
                      width="24px"
                      height="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#commutes-add-icon" />
                    </svg>
                    <div className="label">add alternative address</div>
                  </button>
                </div>
                {/* <button
                  className="left-control"
                  data-direction="-1"
                  aria-label="Scroll left"
                >
                  <svg
                    width="24px"
                    height="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    data-direction="-1"
                  >
                    <use href="#commutes-chevron-left-icon" data-direction="-1" />
                  </svg>
                </button> */}
                <button
                  className="right-control hide"
                  data-direction="1"
                  aria-label="Scroll right"
                >
                  <svg
                    width="24px"
                    height="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    data-direction="1"
                  >
                    <use href="#commutes-chevron-right-icon" data-direction="1" />
                  </svg>
                </button>
              </div>
            </div>
          </main>
          <div className="commutes-modal-container" style={{ display: `${addAddress ? 'block' : 'none'}` }}>
            <div className="commutes-modal">
  
              <div className="content">
                <h2 className="heading">add home address</h2>
                <form id="destination-form">
                  <AutoComplete hideDialog={(e) => setAddAddress(e)} empty={empty} handleSetAddress={(e) => handleSetAddress(e)} handleDestinationLatLng={(e, x) => handleDestinationLatLng(e, x)} />
                  <div className="error-message"></div>
  
                </form>
                <div className="modal-action-bar">
  
                  <button className={`delete-destination-button ${isEdit ? '' : 'hide'}`} onClick={() => handleDeleteItem()} type="reset">Delete</button>
                  <button className="cancel-button mr-4" onClick={() => { setAddAddress(false); setEmpty(false) }} type="reset">Cancel</button>
  
                  
                  <button className={`add-destination-button ${isEdit ? 'hide' : ''}`} onClick={() => { setAddressToState(true); setEmpty(false) }} type="button">Add</button>
                  <button className={`edit-destination-button ${isEdit ? '' : 'hide'}`} onClick={() => { setAddressToState(true); setEmpty(false) }} type="button">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadScript>
    );
  }
}

export default Location;
