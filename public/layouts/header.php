<!DOCTYPE html>
<html lang="en-US">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108469719-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-108469719-1');
    </script>
    <!-- Meta -->
    <title>Reid Brownell's Portfolio</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The portfolio site of Robert Reid Brownell">
    <meta name="keywords" content="Portfolio, Developer, Designer, Blog, PHP">
    <meta name="author" content="Robert Reid Brownell">
    <meta name="theme-color" content="#ffffff">

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.v-2.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.v-2.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">

    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Mukta+Malar:700" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/base.min.css" rel="stylesheet" type="text/css">
    <!-- Inline styles added to help above the fold render blocking -->
    <style type="text/css" media="screen">

        .wrap{background: black url("images/header-sm.png") top/cover no-repeat fixed}
        .header{height: calc(100vh);max-height: 100%}

        #logo {
            top: -63px;
            left: -25px;
            width: 185px;
            height: 185px;
            z-index: 1000
        }
        @media (min-width:768px) {
            #logo {
                top: -50px;
                left: -10px;
                width: 140px;
                height: 140px
            }
        }

        .navbar {
            width: 100%;
            z-index: 500;
            top: 0;
            font-size: 17px;
            border: none
        }
        .navbar ul {
            overflow: hidden;
            color: #28ff0c;
            padding: 0 1em;
            margin: 0;
            transition: max-height .5s;
            position: relative
        }
        .navbar, .navbar ul{background-color: #333}

        .button,
        .button:visited {
            background: 0 0;
            border-radius: 4px;
            border: 4px solid #1ecc70;
            color: #1ecc70;
            padding: 1em;
            text-transform: uppercase;
            margin-top: 2em
        }

        a {text-decoration: underline}

        a.button {
            font-size: 1.2em;
            text-decoration: none
        }

        a,a.button:hover {color: #000}

        .button:hover {
            background: #1ecc70;
            border-color: #fff;
            color: #000;
            text-decoration: none
        }

        .button:active {
            background: #42996b;
            border-color: #1ecc70
        }
        #success h3 {
            color: #000;
        }
         

    </style>
</head>
