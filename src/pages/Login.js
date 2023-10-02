import Header from "../Components/ui/header";
import Login from "../Components/Login/Login";

export default function LoginPage() {
  return (
    <div className={`font-lato antialiased bg-black text-gray-900 tracking-tight`}>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header fixed={true}/>
        <div className=" m-auto max-w-md w-full space-y-8">
          <Login />
        </div>
      </div>
    </div>
  );
}
