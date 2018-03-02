import React from "react";
import styles from "./app.style.css";

export default class App extends React.Component {
    render() {
        return (
            <section className={styles.panel}>Rendered</section>
        );
    }
}