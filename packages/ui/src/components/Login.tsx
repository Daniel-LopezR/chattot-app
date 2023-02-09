function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white border rounded-lg w-1/3 h-1/2 flex flex-col justify-center items-center text-gray-800 gap-5">
        <h1 className=" text-3xl text-center">Login to Chattot</h1>
        <form aria-label="form-login" onSubmit={() => {}}>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
