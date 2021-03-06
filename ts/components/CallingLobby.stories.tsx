import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ColorType } from '../types/Colors';
import { CallingLobby, PropsType } from './CallingLobby';
import { setup as setupI18n } from '../../js/modules/i18n';
import enMessages from '../../_locales/en/messages.json';

const i18n = setupI18n('en', enMessages);

const callDetails = {
  callId: 0,
  isIncoming: true,
  isVideoCall: true,

  id: '3051234567',
  avatarPath: undefined,
  color: 'ultramarine' as ColorType,
  title: 'Rick Sanchez',
  name: 'Rick Sanchez',
  phoneNumber: '3051234567',
  profileName: 'Rick Sanchez',
};

const createProps = (overrideProps: Partial<PropsType> = {}): PropsType => ({
  callDetails,
  hasLocalAudio: boolean('hasLocalAudio', overrideProps.hasLocalAudio || false),
  hasLocalVideo: boolean('hasLocalVideo', overrideProps.hasLocalVideo || false),
  i18n,
  isGroupCall: boolean('isGroupCall', overrideProps.isGroupCall || false),
  onCallCanceled: action('on-call-canceled'),
  onJoinCall: action('on-join-call'),
  setLocalAudio: action('set-local-audio'),
  setLocalPreview: action('set-local-preview'),
  setLocalVideo: action('set-local-video'),
  toggleParticipants: action('toggle-participants'),
  toggleSettings: action('toggle-settings'),
});

const story = storiesOf('Components/CallingLobby', module);

story.add('Default', () => {
  const props = createProps();
  return <CallingLobby {...props} />;
});

story.add('Local Video', () => {
  const props = createProps({
    hasLocalVideo: true,
  });
  return <CallingLobby {...props} />;
});

story.add('Group Call', () => {
  const props = createProps({ isGroupCall: true });
  return <CallingLobby {...props} />;
});
