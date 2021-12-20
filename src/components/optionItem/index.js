const OptionItem = props => {
  const {itemList, updateCapital} = props
  const {country, capitalDisplayText, id} = itemList

  const chnageSelect = () => {
    updateCapital(capitalDisplayText)
  }

  return (
    <option value={id} onClick={chnageSelect}>
      {country}
    </option>
  )
}

export default OptionItem
