import { Navigate } from 'react-router-native';
import { DefaultLayout } from '../Layouts';
import { Dev, DeviceList, FindDevices } from '../Views';


const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    element: () => Navigate({ to: '/find-devices', replace: true }),

  },
  {
    path: "/dev",
    exact: true,
    layout: DefaultLayout,
    element: Dev
  },
  {
    path: "/find-devices",
    exact: true,
    layout: DefaultLayout,
    element: FindDevices
  },
  {
    path: "/device-list",
    exact: true,
    layout: DefaultLayout,
    element: DeviceList
  }
  // {
  //   path: '/forgotPassword',
  //   exact: true,
  //   layout: BackButtonHeaderLayout,
  //   element: ForgotPassword,
  // },
  // {
  //   path: '/verifyEmail',
  //   exact: true,
  //   layout: BackButtonHeaderLayout,
  //   element: VerifyEmail,
  // },
  // {
  //   path: '/resetPassword',
  //   exact: true,
  //   layout: BackButtonHeaderLayout,
  //   element: ResetPassword,
  // },
  // {
  //   path: '/login',
  //   exact: true,
  //   layout: BackButtonHeaderLayout,
  //   element: Login,
  // },
  // {
  //   path: '/signup',
  //   exact: true,
  //   layout: BackButtonHeaderLayout,
  //   element: SignUp,
  // },
  // {
  //   path: '/getstarted',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: GetStarted,
  // },
  // {
  //   path: '/welcome',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: Welcome,
  // },
  // {
  //   path: '/targetlistota',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: TargetListOTA,
  // },
  // {
  //   path: '/targetlist',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: TargetList,
  // },
  // {
  //   path: '/gameselect',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: GameSelect,
  // },
  // {
  //   path: '/freeform',
  //   exact: true,
  //   layout: GameLayout,
  //   element: FreeformGame,
  //   title: 'FREEFORM',
  //   subTitle: 'Blast as many targets as you can in 30 seconds! You’ll get a point for each hit',
  // },
  // {
  //   path: '/whack-a-mole',
  //   exact: true,
  //   layout: GameLayout,
  //   element: WhackMoleGame,
  //   title: 'WHACK-A-MOLE',
  //   subTitle: 'Blast the targets while they are lit up. Don’t blast them while they are off or you’ll lose points!',
  // },
  // {
  //   path: '/whack-a-mole-v2',
  //   exact: true,
  //   layout: TwoPlayerLayout,
  //   element: WhackMoleV2Game,
  //   title: 'WHACK-A-MOLE-V2',
  //   subTitle: 'Blast the targets while they are lit up. Don’t blast them while they are off or you’ll lose points!',
  // },
  // {
  //   path: '/eliminator',
  //   exact: true,
  //   layout: GameLayout,
  //   element: EliminatorGame,
  //   title: 'ELIMINATOR',
  //   subTitle: 'Eliminate the active targets. You’ll get points for each hit and lose points for each missed hit.',
  // },
  // {
  //   path: '/manual-override',
  //   exact: true,
  //   layout: GameLayout,
  //   element: ManualOverrideGame,
  //   title: 'MANUAL OVERRIDE',
  //   subTitle: '2 player game where your opponent can control the target',
  // },
  // {
  //   path: '/target-dev',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: TargetLedDebuggerView,
  // },
  // {
  //   path: '/color-dev',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: ColorDebuggerView,
  // },
  // {
  //   path: '/message-dev',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: MessageDebuggerView,
  // },
  // {
  //   path: '/mainmenu',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: MainMenu,
  // },
  // {
  //   path: '/devmenu',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: DeveloperMenuView,
  // },
];

export default publicRoutes;
