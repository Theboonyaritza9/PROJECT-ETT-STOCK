import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {

    const pageNumbers = [];

    const pagiItem = {
        padding: "10px",
        border: "1px solid #ccc"
    }

    // 100 / 10
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination" style={{display: "flex", marginBottom: "30px"}}>
            {pageNumbers.map(number => (
                <li key={number} className="page-item" onClick={() => paginate(number)} style={pagiItem}>
                    {number}
                    {/* <a onClick={() => paginate(number)} href="!#" className="page-link" style={pagiItem}>{number}</a> */}
                </li>
            ))}
        </ul>
    )
}

export default Pagination