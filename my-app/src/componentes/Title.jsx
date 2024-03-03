export default function Title({ data }) {
    return (
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="font-Oswald font-bold text-black  w-full sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl min-w-title m-10" style={{ fontSize: '4vw' }}>
          {data.title}
        </h1>
        <h1 className="font-Oswald font-bold text-gray-500 min-w-descri m-10" style={{ fontSize: '1vw', textAlign:'center' }}>
          {data.description}
        </h1>
      </div>
    );
  }
  