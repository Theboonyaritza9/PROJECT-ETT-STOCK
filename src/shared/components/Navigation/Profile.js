export default function Profile(props) {

    return (
        <div className="Nav-profile" >
            <div className="Nav-profile-img" >
                <img src={props.profileUser} alt="1234" />
            </div>
            <p>{props.name}</p>
        </div>
    )
}
