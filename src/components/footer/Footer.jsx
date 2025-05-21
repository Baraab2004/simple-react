import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className="footer text-center">
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-4 d-flex flex-column gap-3">
                    <h3>LOCATION</h3>
                    <p className='para1'>2215 John Daniel DriveClark, MO 65243</p>
                </div>
                <div className="col-md-4 d-flex flex-column gap-3">
                    <h3>AROUND THE WEB</h3>
                    <div className="media d-flex gap-3 justify-content-center">
                        <a className='btn btn-outline-light rounded-circle' href=""><FontAwesomeIcon icon={faFacebook}/></a>
                        <a className='btn btn-outline-light rounded-circle' href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className='btn btn-outline-light rounded-circle' href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className='btn btn-outline-light rounded-circle' href=""><FontAwesomeIcon icon={faGlobe}/></a>
                    </div>
                </div>
                <div className="col-md-4 d-flex flex-column gap-3">
                    <h3>ABOUT FREELANCER</h3>
                    <p className='para2'>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="">Ahmad Baker</a>.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
