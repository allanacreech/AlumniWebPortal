import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'jumbotron': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.6 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.6 }],
    'clear': 'both'
  },
  'h1': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'p': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'btn': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'icon-bar': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'backgroundColor': '#555',
    'overflow': 'auto',
    'float': 'right',
    'clear': 'both'
  },
  'icon-bar a': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'transition': 'all 0.3s ease',
    'color': 'white',
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'icon-bar a:hover': {
    'backgroundColor': '#000'
  },
  'active a:hover': {
    'backgroundColor': '#4CAF50 !important'
  },
  // Search box items
  'input[type=text]': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 130 }],
    'boxSizing': 'border-box',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '4px',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'backgroundColor': 'white',
    'backgroundImage': 'url('searchicon.png')',
    'backgroundPosition': '10px 10px',
    'backgroundRepeat': 'no-repeat',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 40 }],
    'WebkitTransition': 'width 0.4s ease-in-out',
    'transition': 'width 0.4s ease-in-out'
  },
  'input[type=text]:focus': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  }
});
