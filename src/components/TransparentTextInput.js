import React from 'react'
import PropTypes from 'prop-types'

class TransparentTextInput extends React.PureComponent {
  onChange(event) {
    this.props.onChange(event.target.value)
  }

  onKeyPress(event) {
    const { onEnterKeyPressed } = this.props
    if (onEnterKeyPressed && event.key === 'Enter')
      onEnterKeyPressed(event)
  }

  render() {
    const { value, placeholder } = this.props

    return (
      <input
        className="TransparentTextInput"
        onChange={this.onChange.bind(this)}
        onKeyPress={this.onKeyPress.bind(this)}
        value={value}
        placeholder={placeholder} />
    )
  }
}

TransparentTextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnterKeyPressed: PropTypes.func
}

export default TransparentTextInput
