import styles from './button.module.css'

interface IProps {
    value: string,
    onClick: (event: React.SyntheticEvent) => void,
    type: string,
    active: boolean
}

const Button = ({value, onClick, type, active}: IProps) => {
    let className = styles.button
    if (type === 'filter') className = styles.button__filter
    if (active) className = styles.button__active

    return (
        <button
            onClick={onClick}
            className={className}
        >
            {value}
        </button>
    )
}

export default Button
