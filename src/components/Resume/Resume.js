import React from 'react'
import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
import pdf from '../../Assets/Raghav_Gupta_resume.pdf'
import Particle from '../Bgparticle/Particle'
import { Container } from 'react-bootstrap'



const resumeLink = 
"https://drive.google.com/file/d/1Tjd9zLV07BPqUXtlKbVODwyfLi-3vApX/view?usp=share_link"
export default function Resume() {
  return (
    <div>
       <Document file={resumeLink}></Document>
    </div>
  )
}
