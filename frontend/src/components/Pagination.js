import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import {animateScroll as scroll} from 'react-scroll';

const Pagination = ({itemsPerPage, wholeDataGetter, currentDataSetter, offsetTop}) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    currentDataSetter(wholeDataGetter.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(wholeDataGetter.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, wholeDataGetter]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % wholeDataGetter.length;
    setItemOffset(newOffset);
    scroll.scrollTo( offsetTop || 0,{
      duration: 400,
    });
    console.log(offsetTop);
  };

  return (
    <>
      <ReactPaginate
            breakLabel="..."
            nextLabel="→"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="←"
            renderOnZeroPageCount={null}
            containerClassName='flex w-full justify-center font-lato'
            pageLinkClassName='pl-4 pr-4'
            pageClassName='mr-4 text-xl font-bold border-2 border-[#142E46] rounded-md hover:cursor-pointer'
            previousClassName='mr-4 text-xl font-bold border-2 border-[#142E46] rounded-md hover:cursor-pointer'
            previousLinkClassName='pl-4 pr-4'
            nextClassName='text-xl font-bold border-2 border-[#142E46] rounded-md hover:cursor-pointer'
            nextLinkClassName='pl-4 pr-4'
            activeClassName='bg-[#142E46] text-white font-normal'
          />
    </>
  )
}

export default Pagination