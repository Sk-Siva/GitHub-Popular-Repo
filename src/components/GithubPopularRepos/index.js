import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const statusConstants = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    repositoryList: [],
    currentTab: languageFiltersData[0].id,
    status: statusConstants.loading,
  }

  componentDidMount() {
    this.getRepository()
  }

  onLanguageChange = id => {
    this.setState({currentTab: id}, this.getRepository)
  }

  getRepository = async () => {
    const {currentTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${currentTab}`
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      const updatedList = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState(
        {
          repositoryList: updatedList,
          status: statusConstants.success,
        },
        this.getRepository,
      )
    } else {
      this.setState({status: statusConstants.failure})
    }
  }

  getRepositoriesView = () => {
    const {repositoryList, status} = this.state
    switch (status) {
      case statusConstants.success:
        return this.renderSuccessView(repositoryList)
      case statusConstants.loading:
        return this.renderLoaderView()
      case statusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderSuccessView = repositoryList => (
    <ul className="list-con">
      {repositoryList.map(each => (
        <RepositoryItem key={each.id} repositoryDetails={each} />
      ))}
    </ul>
  )

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
    />
  )

  render() {
    const {currentTab} = this.state
    return (
      <div className="main-bg-con">
        <h1 className="head">Popular</h1>
        <div>
          <ul className="list-con">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                key={each.id}
                languageDetails={each}
                currentTab={currentTab}
                onLanguageChange={this.onLanguageChange}
              />
            ))}
          </ul>
        </div>
        {this.getRepositoriesView()}
      </div>
    )
  }
}

export default GithubPopularRepos
