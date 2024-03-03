import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function Card({ data }) {
    return (
        <div className="col-span-1 md:col-span-1 p-4 min-w-96" style={{ margin: '0 auto' }}>
            <img className="rounded-2xl bg-cover bg-center max-h-72 shadow-md mb-9"
                src={data.imageUrl}
                alt="Imagem"
                width={500}
                height={300}
            />
            <h1 className="font-Oswald font-bold text-black text-xl max-w-400 text-start mb-6">
                {data.title}
            </h1>

            <h3 className="mb-6 text-gray-500 font-light text-left">
                {data.description}
            </h3>

            {data.linkUrl === '#' ? (
                <Link className="mb-6 flex items-center" href={data.linkUrl}>
                    Read more
                    <ArrowRightIcon className="w-4 h-4 ml-1 text-gray-500" />
                </Link>
            ) : (
                <span className="mb-6 flex items-center">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </span>
            )}
        </div>
    )
}