import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url(http://fonts.googleapis.com/css?family=Lato:300,400,700)',
  '*': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '*:after': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '*:before': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // General Demo Style
  'body': {
    'fontFamily': ''Lato', 'Myriad Pro','Trebuchet MS', sans-serif',
    'background': '#f9f9f9 url(../images/bg.jpg) repeat top left',
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'overflow': 'scroll',
    'overflowX': 'hidden'
  },
  'a': {
    'color': '#555',
    'textDecoration': 'none'
  },
  'a img': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'container': {
    'position': 'relative',
    'background': 'transparent url(../images/light.png) fixed no-repeat center top'
  },
  // Center Box
  'center-block': {
    'backgroundColor': '#fff',
    'borderRadius': '8px',
    'height': [{ 'unit': 'px', 'value': 550 }],
    'marginLeft': [{ 'unit': 'px', 'value': -400 }],
    'marginTop': [{ 'unit': 'px', 'value': -266 }],
    'width': [{ 'unit': 'px', 'value': 800 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'position': 'absolute',
    'boxShadow': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '#595959' }],
    'zIndex': '1'
  },
  // Main Image
  'focalImage': {
    'display': 'inline-block',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'verticalAlign': 'top',
    'overflow': 'hidden',
    'borderRadius': '8px 8px 0px 0px'
  },
  // Login Section
  'formRow': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'cityStateUniversityLogo': {
    'marginLeft': [{ 'unit': 'px', 'value': 25 }]
  },
  'poweredByLine': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'academicWebSolutionsLine': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginTop': [{ 'unit': 'px', 'value': -8 }],
    'marginLeft': [{ 'unit': 'px', 'value': 32 }]
  },
  'formRow col-md-4': {
    'float': 'left'
  },
  'container-fluid': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'col-lg-8': {
    'marginLeft': [{ 'unit': 'px', 'value': -20 }]
  },
  'loginForm p': {
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 210 }]
  },
  'input[type=text]': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 130 }],
    'boxSizing': 'border-box',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '4px',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'backgroundColor': 'white',
    // background-image: url('searchicon.png');
    'backgroundPosition': '10px 10px',
    'backgroundRepeat': 'no-repeat',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 40 }],
    'WebkitTransition': 'width 0.4s ease-in-out',
    'transition': 'width 0.4s ease-in-out'
  },
  'poweredByLine': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'academicWebSolutionsLine': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginTop': [{ 'unit': 'px', 'value': -8 }],
    'marginLeft': [{ 'unit': 'px', 'value': 32 }]
  },
  'formRow col-md-4': {
    'float': 'left'
  },
  'container-fluid': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'col-lg-8': {
    'marginLeft': [{ 'unit': 'px', 'value': -20 }]
  },
  'loginForm p': {
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 210 }]
  }
});
