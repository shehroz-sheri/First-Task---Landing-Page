import React from 'react'

export default function PartComp(props) {
    return (
        <div>
            <div className="col-12 col-md-2">
                <div>
                    <img className='img-fluid' src={require( props.imgSrc )} alt="" />
                    <p className='text-center'>{props.title}</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}
