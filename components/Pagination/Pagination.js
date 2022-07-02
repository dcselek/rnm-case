import React from 'react'

function Pagination({onClick}) {
    const [pageNum, setPageNum] = React.useState(1)

    function clickPageNumButton(type){
        if(type === 'dec') {
            pageNum > 1 ? setPageNum(pageNum - 1) : alert('You are on the first page!')
        }
        
        if(type === 'inc'){
            setPageNum(pageNum + 1)
        }
    }

    //TODO: usestate async
    React.useEffect(() => {
        onClick(pageNum)
    }, [pageNum])

    return (
        <div className="flex justify-center pt-5 items-center">
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => clickPageNumButton('dec')}>Prev</button>
            <span className="text-3xl font-bold p-2 ">{pageNum}</span>
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => clickPageNumButton('inc')}>Next</button>
        </div>
    )
}

export default Pagination