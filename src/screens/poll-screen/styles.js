import styled from 'styled-components/native';
import actionsBar from '../../components/actions-bar';
import Colors from '../../constants/colors';

const ContainerView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  ${({ orientation }) =>
    orientation === 'LANDSCAPE' &&
    `
    flex-direction: row;
    justify-content: center;
  `}
`;

const ContainerViewPadding = styled.View`
  padding: 12px;
`;

const ActionsBarContainer = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ orientation }) =>
    orientation === 'LANDSCAPE' &&
    `
      width: 10%;
      height: 100%;
  `}
`;

const ContainerPollCard = styled.ScrollView`
  background-color: ${Colors.white};
  width: 100%;
  max-height: 85%;
  border-radius: 12px;
  display: flex;
`;

const ActionsBar = styled(actionsBar)`
  ${({ orientation }) =>
    orientation === 'LANDSCAPE' &&
    `
      flex-direction: column;
      display: flex;
  `}
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 24px;
`;

const NoPollText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  padding-bottom: 24px;
`;

export default {
  ContainerView,
  ContainerViewPadding,
  ActionsBarContainer,
  ActionsBar,
  ContainerPollCard,
  Title,
  NoPollText,
};
