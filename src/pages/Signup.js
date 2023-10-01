import Header from "../Components/Header/Header.js";
import Signup from "../Components/Signup/Signup";

export default function SignupPage() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <Signup />
      </div>
    </div>
  );
}
