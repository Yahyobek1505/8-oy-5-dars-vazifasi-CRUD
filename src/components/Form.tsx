const Form = () => {
  return (
    <>
      <div className="form w-full my-4">
        <h1 className="text-center font-semibold text-4xl pb-4">Add your products</h1>
        <form className=" flex flex-col gap-4 bg-slate-300 max-w-[700px] mx-auto border p-4">
          <input type="text" className="rounded-md indent-4 h-8" placeholder="Enter product name" />
          <input type="number" className="rounded-md indent-4 h-8" placeholder="Enter product price"/>
          <textarea name="desc" className="rounded-md indent-4" placeholder="Enter descripion"></textarea>
          <button className="bg-blue-500 w-1/5 rounded-lg mx-auto">Send</button>
        </form>
      </div>
    </>
  );
};

export default Form;
