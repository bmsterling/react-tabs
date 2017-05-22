import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

export default class TabList extends Component {
  static defaultProps = {
    className: 'react-tabs__tab-list',
    wrapList: false,
  };

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    wrapList: PropTypes.bool,
  };

  renderMenuList() {
    const { children, className, wrapList, ...attributes } = this.props;

    return (
      <ul {...attributes} className={cx(className)} role="tablist">
        {children}
      </ul>
    );
  }

  renderMenu() {
    const { wrapList } = this.props;

    if (wrapList) {
      return (
        <div className="react-tabs__menu">
          {this.renderMenuList()}
        </div>
      );
    }

    return this.renderMenuList();
  }

  render() {
    return (
      this.renderMenu()
    );
  }
}
