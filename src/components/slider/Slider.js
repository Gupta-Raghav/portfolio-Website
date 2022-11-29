import React from 'react';
import {motion, MotionConfig} from 'framer-motion';
import { useRef,useEffect,useState } from 'react';
import images from './Images'
import './images.css';
export default function Slider() {
    const [width, setwidth] = useState(0);
    const carousel = useRef();

    useEffect(()=>{
        // console.log(carousel.current)
        setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[]);
  return (
    <div className='wrapper'>
        <motion.div ref={carousel} className = "carousel" whileTap={{cursor:"grabbing"}}>
            <motion.div drag = 'x' dragConstraints={{right:0,left: -width}} className="inner-carousel">
                {images.map(image=>{
                    return (
                        <motion.div className='item' key={image}>
                            <img src={image} alt=""/>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
        {/* <h1>slider in making</h1> */}
    </div>
  )
}
