import React from 'react';
import { shallow, mount } from 'enzyme';
import { List } from 'immutable';

import { Header } from './Header';

describe('<Header />', () => {
  let toggleSidebarOpen;
  let alerts;
  let fetchAlerts;
  let profile;
  let openFeedbackForm;
  let openHelpForm;
  let openInviteOthersForm;
  let openKitchenSinkForm;

  beforeEach(() => {
    toggleSidebarOpen = jest.fn();
    alerts = List();
    fetchAlerts = jest.fn();
    profile = {};
    openFeedbackForm = jest.fn();
    openHelpForm = jest.fn();
    openInviteOthersForm = jest.fn();
    openKitchenSinkForm = jest.fn();
  });

  const renderHeader = () => (
    <Header
      toggleSidebarOpen={toggleSidebarOpen}
      alerts={alerts}
      fetchAlerts={fetchAlerts}
      profile={profile}
      openFeedbackForm={openFeedbackForm}
      openHelpForm={openHelpForm}
      openInviteOthersForm={openInviteOthersForm}
      openKitchenSinkForm={openKitchenSinkForm}
    />
  );
  test('snapshot', () => {
    const wrapper = shallow(renderHeader());

    expect(wrapper).toMatchSnapshot();
  });

  describe('sidebar hamburger', () => {
    test('exists when there is a #toggleSidebarOpen', () => {
      const wrapper = mount(renderHeader());
      expect(wrapper.find('#header-sidebar-toggle')).toHaveLength(1);
    });

    test('does not exist when there is no #toggleSidebarOpen', () => {
      toggleSidebarOpen = null;
      const wrapper = mount(renderHeader());
      expect(wrapper.find('#header-sidebar-toggle')).toHaveLength(0);
    });
  });
});
