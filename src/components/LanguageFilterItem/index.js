import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, currentTab, onLanguageChange} = props
  const {id, language} = languageDetails

  const currentStyle = currentTab === id ? 'active-style' : 'btn'

  const onChangeLanguage = () => {
    onLanguageChange(id)
  }
  return (
    <li className="list">
      <button className={currentStyle} type="button" onClick={onChangeLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
