import style from '../../Messages.module.scss';


const SentMessage = (props) => {
   return(
      <div className={`${style.dialogWindow__sent} ${style[props.sender]}`}>
         <p>{props.message}</p>
      </div>
   )
}

export default SentMessage;