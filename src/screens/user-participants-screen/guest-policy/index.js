import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useOrientation } from '../../../hooks/use-orientation';
import withPortal from '../../../components/high-order/with-portal';
import Styled from './styles';
import { selectUsersProp } from '../../../store/redux/slices/meeting';
import { isModerator } from '../../../store/redux/slices/current-user';
import Service from './service';
import Colors from '../../../constants/colors';

const guestPolicies = {
  ASK_MODERATOR: 'ASK_MODERATOR',
  ALWAYS_ACCEPT: 'ALWAYS_ACCEPT',
  ALWAYS_DENY: 'ALWAYS_DENY'
};

const GuestPolicyScreen = ({ navigation }) => {
  const guestPolicy = useSelector((state) => selectUsersProp(state, 'guestPolicy'));
  const amIModerator = useSelector(isModerator);

  const orientation = useOrientation();

  // lifecycle methods
  useEffect(() => {
    // user got demoted to viewer, go out of this screen as he does not have
    // permission to use it
    if (!amIModerator) {
      navigation.goBack();
    }
  }, [amIModerator]);

  return (
    <Styled.ContainerView orientation={orientation}>
      <Styled.GuestPolicyView orientation={orientation}>
        <Styled.GuestPolicyTop>
          <Styled.BackIcon
            icon="arrow-left"
            iconColor={Colors.white}
            onPress={() => { navigation.goBack(); }}
          />
          <Styled.GuestPolicyTopText>Política de Convidados</Styled.GuestPolicyTopText>
        </Styled.GuestPolicyTop>
        <Styled.DividerTop />
        <Styled.OptionsButtonsContainer>
          <Styled.OptionsButton
            selected={guestPolicy === guestPolicies.ASK_MODERATOR}
            disabled={guestPolicy === guestPolicies.ASK_MODERATOR}
            onPress={() => {
              Service.handleChangeGuestPolicy(guestPolicies.ASK_MODERATOR);
            }}
          >
            Perguntar ao moderador
          </Styled.OptionsButton>
          <Styled.OptionsButton
            selected={guestPolicy === guestPolicies.ALWAYS_ACCEPT}
            disabled={guestPolicy === guestPolicies.ALWAYS_ACCEPT}
            onPress={() => {
              Service.handleChangeGuestPolicy(guestPolicies.ALWAYS_ACCEPT);
            }}
          >
            Aceitar todos
          </Styled.OptionsButton>
          <Styled.OptionsButton
            selected={guestPolicy === guestPolicies.ALWAYS_DENY}
            disabled={guestPolicy === guestPolicies.ALWAYS_DENY}
            onPress={() => {
              Service.handleChangeGuestPolicy(guestPolicies.ALWAYS_DENY);
            }}
          >
            Rejeitar todos
          </Styled.OptionsButton>
        </Styled.OptionsButtonsContainer>
      </Styled.GuestPolicyView>
      <Styled.ActionsBarContainer orientation={orientation}>
        <Styled.ActionsBar orientation={orientation} />
      </Styled.ActionsBarContainer>
    </Styled.ContainerView>
  );
};

export default withPortal(GuestPolicyScreen);
