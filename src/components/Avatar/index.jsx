import Image from "next/image";
import styles from './avatar.module.css'

export const Avatar = ({name, imageSrc}) => {
    return (
        <ul className={styles.avatar}>
            <li>
                <Image src={imageSrc} width={32} height={32} priority={true} alt={`Avatar da(o): ${name}`}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}