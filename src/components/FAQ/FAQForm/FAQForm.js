import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal";


export default function FAQForm() {
  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );

  return (
    <>
      <Zoom>
      <div className='my-5 py-md-5'>
        <div className="container border border-1 rounded-4 p-4 my-3 bg-info">

          {/* <Collapse items={items} bordered={true} expandIcon={'line'} expandIconPosition='end' /> */}
          <div className="m-2 m-md-5">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item my-2 border rounded px-3 border-warning bg-transparent">
                <h2 className="accordion-header bg-transparent fs-6">
                  <button className="bg-transparent border-0 accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    What is Web3?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse bg-transparent collapse text-secondary" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body bg-transparent" style={{ fontSize: '0.9em' }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item my-2 border rounded px-3 border-warning bg-transparent">
                <h2 className="accordion-header bg-transparent fs-6">
                  <button className="accordion-button bg-transparent border-0 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse bg-transparent text-secondary" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body bg-transparent" style={{ fontSize: '0.9em' }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item my-2 border rounded px-3 border-warning bg-transparent">
                <h2 className="accordion-header bg-transparent fs-6">
                  <button className="accordion-button collapsed bg-transparent border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse bg-transparent text-secondary" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body bg-transparent" style={{ fontSize: '0.9em' }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Zoom>
    </>
  )
}
