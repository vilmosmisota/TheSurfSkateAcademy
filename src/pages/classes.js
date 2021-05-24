import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/classes.css"
import GetAllClasses from "../components/GetAllClasses"

const classes = () => {
  return (
    <Layout>
      <header className="classes-header-container">
        <section className="classes-options">
          <div className="classes-info">
            <p>FAQ</p>
          </div>
          <div className="classes-info">
            <p>PRICES</p>
          </div>
        </section>
        <div></div>
      </header>
      <main className="class-page">
        <section className="class-header">
          <h1>UPCOMING CLASSES</h1>
        </section>
        <article className="class-table">
          <div className="class-table-header">
            <div className="col1">
              <h3>Date</h3>
            </div>
            <div className="col2">
              <h3>Location</h3>
            </div>
            <div className="col3">
              <h3>Availability</h3>
            </div>
          </div>
        </article>
        <GetAllClasses />
      </main>
    </Layout>
  )
}

export default classes
