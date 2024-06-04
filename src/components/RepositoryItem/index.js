import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} =
    repositoryDetails
  return (
    <li className="list">
      <div className="repository-con">
        <img className="list-img" src={avatarUrl} alt={name} />
        <h1 className="name">{name}</h1>
        <div className="icon-con">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{starsCount}</p>
        </div>
        <div className="icon-con">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{forksCount}</p>
        </div>
        <div className="icon-con">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p>{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
