import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../helpers/firebase';

function Login() {
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('user', result.user);
    } catch (error) {
      console.log('err', error);
    }
  };
  return (
    <div className="login">
      <button
        onClick={() => {
          console.log('google click');
          GoogleLogin();
        }}
      >
        <FcGoogle style={{ fontSize: '20px' }} /> Sign in with Google
      </button>
    </div>
  );
}

export default Login;
