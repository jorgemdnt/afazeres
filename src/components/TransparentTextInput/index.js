import React from 'react'
import PropTypes from 'prop-types'
import styles from './TransparentTextInput.module.css'
import cx from 'classnames'

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
    const { value, placeholder, className } = this.props

    return (
      <input
        className={cx(styles.transparentTextInput, className)}
        onChange={this.onChange.bind(this)}
        onKeyPress={this.onKeyPress.bind(this)}
        value={value}
        placeholder={placeholder} />
    )
  }
}

TransparentTextInput.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnterKeyPressed: PropTypes.func
}

export default TransparentTextInput
