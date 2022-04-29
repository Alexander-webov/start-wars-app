import React from "react"
import ContentLoader from "react-content-loader"
import styles from './UILoading.module.css'

const Uiloading = (props) => (
    <ContentLoader
        speed={1}
        width={170}
        height={460}
        viewBox="0 0 170 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-26" y="57" rx="0" ry="0" width="263" height="18" />
        <rect x="16" y="84" rx="0" ry="0" width="160" height="18" />
        <rect x="195" y="363" rx="0" ry="0" width="81" height="32" />
        <rect x="2" y="112" rx="0" ry="0" width="170" height="18" />
        <rect x="19" y="137" rx="0" ry="0" width="160" height="18" />
        <rect x="-3" y="7" rx="0" ry="0" width="171" height="25" />
        <rect x="6" y="166" rx="0" ry="0" width="170" height="18" />
        <rect x="18" y="194" rx="0" ry="0" width="160" height="18" />
    </ContentLoader>
)

export default Uiloading

