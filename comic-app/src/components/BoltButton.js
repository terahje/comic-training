import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '@/styles/Comic.module.css'

import {
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

export default function BoltButton () {

    return (
        <div className={styles.button}>
            <FontAwesomeIcon
                icon={faBoltLightning}
                style={{ fontSize: 16, color: "white" }}
            />
        </div>
     );
}
