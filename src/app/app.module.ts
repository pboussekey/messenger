import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FCM } from '@ionic-native/fcm';
import { Device } from '@ionic-native/device';
import { Keyboard } from '@ionic-native/keyboard';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LiveClassesPage } from '../pages/liveclasses/liveclasses';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { MailSignInPage } from '../pages/mailSignIn/mailSignIn';
import { PasswordSignInPage } from '../pages/passwordSignIn/passwordSignIn';
import { AlmostSignInPage } from '../pages/almostSignIn/almostSignIn';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { NewMessagePage } from '../pages/newMessage/newMessage';
import { ConversationPage } from '../pages/conversation/conversation';

// Custom components
import { LiveClassComponent } from '../components/liveclass/liveclass';
import { ConversationComponent } from '../components/conversation/conversation';
import { UserResultComponent } from '../components/userResult/userResult';
import { MessageComponent } from '../components/message/message';
import { WritingComponent } from '../components/writing/writing';

// Directives
import { BackgroundImgDirective } from '../directives/backgroundImage.directive';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
// Providers
import { ApiModule } from '../providers/api/api.module';
import { EventsModule } from '../providers/events/events.module';
import { SharedModule } from '../providers/shared/shared.module';

import { configuration } from '../const/configuration';
import { LinkedIn } from '@ionic-native/linkedin';
import { Hangout } from '../providers/hangout/hangout.provider';

@NgModule({
    declarations: [
        MyApp,
        // Pages
        WelcomePage,
        AboutPage,
        MailSignInPage,
        PasswordSignInPage,
        AlmostSignInPage,
        ForgotPasswordPage,
        HomePage,
        ProfilePage,
        NewMessagePage,
        ConversationPage,
        // Components
        ConversationComponent,
        UserResultComponent,
        MessageComponent,
        WritingComponent,
        // Directives
        BackgroundImgDirective,
        // OLD
        LoginPage,
        LiveClassesPage,
        LiveClassComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule.forRoot(),
        PipesModule.forRoot(),
        EventsModule.forRoot(),
        ApiModule.forRoot(),
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        // Pages
        WelcomePage,
        AboutPage,
        MailSignInPage,
        PasswordSignInPage,
        AlmostSignInPage,
        ForgotPasswordPage,
        HomePage,
        ProfilePage,
        NewMessagePage,
        ConversationPage,
        // Components
        ConversationComponent,
        UserResultComponent,
        MessageComponent,
        WritingComponent,
        // OLD
        LoginPage,
        LiveClassesPage,
        LiveClassComponent
    ],
    providers: [
        Hangout,
        LinkedIn,
        StatusBar,
        SplashScreen,
        FCM,
        Device,
        Keyboard,
        InAppBrowser,
        NativeAudio,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {provide: "Configuration", useValue: configuration }
    ]
})

export class AppModule {}
