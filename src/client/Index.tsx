import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';

import {
    AppBar,
    Box,
    CssBaseline,
    Container,
    ThemeProvider,
    Toolbar,
} from '@material-ui/core';

import {
    StylesProvider
} from '@material-ui/core/styles';

import { MDXProvider } from '@mdx-js/react';
import commonMDXComponents from '../common/MDXComponents';

import theme from './Theme'

import ToolbarButton from '../common/ToolbarButton';

import DefaultLayout from './DefaultLayout';

import Home from '../pages/Home.mdx';
import Assignments from '../pages/Link1.mdx';
import Calendar from '../pages/Link2.mdx';

import { AppStore, createAppStore } from "../stores/AppStore";
import { AppStoreProvider } from '../stores/AppStoreProvider';

declare let module: any;

const appStore: AppStore = createAppStore();

const createUi = () => {
    return (
        <AppStoreProvider>
            <ThemeProvider theme={theme}>
                <StylesProvider injectFirst>
                    <CssBaseline/>
                    <MDXProvider components={commonMDXComponents}>
                        <Router history={appStore.routerStore.history}>
                            <AppBar position="static">
                                <Container>
                                    <Toolbar disableGutters>
                                        <Box display="flex" flexDirection="row" width="100%">
                                            <ToolbarButton to="/">App Access Browser</ToolbarButton>
                                            <Box flexGrow={1} />
                                            <ToolbarButton to="/link1">Link 1</ToolbarButton>
                                            <ToolbarButton to="/link2">Link 2</ToolbarButton>
                                        </Box>
                                    </Toolbar>
                                </Container>
                            </AppBar>
                            <Container>
                                <DefaultLayout>
                                    { /* TODO React Router v6 for Routes Component */ }
                                    <Switch>
                                        <Route exact path="/">
                                            <Home />
                                        </Route>
                                        <Route path="/link1">
                                            <Assignments />
                                        </Route>
                                        <Route path="/link2">
                                            <Calendar />
                                        </Route>
                                    </Switch>
                                </DefaultLayout>
                            </Container>
                        </Router>
                    </MDXProvider>
                </StylesProvider>
            </ThemeProvider>
        </AppStoreProvider>
    );
};

ReactDOM.render(createUi(), document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
