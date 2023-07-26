import React, { Component } from 'react'

// bootstrap uses
import Button from 'react-bootstrap/Button';

// font awesome uses
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faFacebook,faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser)


export class App extends Component {
  render() {
    return (
      <div>
         <Button variant="warning">Warning </Button>
         <FontAwesomeIcon className='p-5' icon="fa-solid fa-house" />
      </div>
    )
  }
}

export default App