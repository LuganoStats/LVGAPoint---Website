import { Col } from 'react-bootstrap'
import style from './ImageLink.module.css'

export default function ImageLink(props) {
    return (
        <Col className={style.col}>
            <a
                className={style.a}
                href={props.href}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className={style.logo}
                    src={`/${props.src}`}
                    width="50"
                    height="50"
                    alt={props.alt}
                />
            </a>
            <h6> {props.desc}</h6>
        </Col>
    )
}
