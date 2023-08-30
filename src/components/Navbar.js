import React from 'react'
import { Link } from 'react-router-dom'
import "./style1.css"
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">EchoMeetUp</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </div>
  )
}

export default Navbar
