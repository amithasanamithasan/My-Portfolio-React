
import Github from '../assets/Github.png';

const Cards = ({ item }) => {
    return (
        <div className='border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50'>
            <img src={item.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
             <p className='text-cyan-600'><span className='text-2xl font-semibold text-black' >Frontend: </span> {item.Framework} </p>   
             <p  className=' text-cyan-600'><span className='text-2xl font-semibold text-black'>ToolsTecnology:</span> {item.ToolsTecnology} </p>   
                <div className='flex flex-col lg:flex-row gap-3 mt-4'>
                    <a 
                        href={item.live} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 text-center'>
                        Live Preview
                    </a>
                    <div className='flex gap-3'>
                        <a 
                            href={item.ClientSide} 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='flex items-center bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 gap-2'
                        >
                            <img src={Github} alt="GitHub Icon" className='w-6 ' />
                            Client Side
                        </a>
                        <a 
                            href={item.ServerSide} 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='flex items-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 gap-2'
                        >
                            <img src={Github} alt="GitHub Icon" className='w-6' />
                            Server Side
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
