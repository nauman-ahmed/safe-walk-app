import Header from "../Components/ui/header";
import Signup from "../Components/Signup/Signup";

export default function SignupPage() {
  return (
    <div className={`font-lato antialiased bg-black text-gray-900 tracking-tight`}>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header fixed={true}/>
        <div className=" m-auto max-w-md w-full space-y-8">
        <Signup 
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />

        </div>
      </div>
    </div>
  );
}
