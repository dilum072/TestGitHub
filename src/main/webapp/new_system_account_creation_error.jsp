
<%@page import="java.util.List"%>
<%@taglib  prefix="s" uri="/WEB-INF/struts-tags.tld"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Mobitel</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="image/x-icon" href="mobitel.ico" rel="shortcut icon"/>

        <!-- Bootstrap -->
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <link href="css/Bootstrap3-PIE.css" rel="stylesheet"/>

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
              <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
              <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
            <![endif]-->

        <!--[if IE 7]>
                <link rel="stylesheet" type="text/css" href="css/ie7.css">
        <![endif]-->

        <!--Popup style sheet -->
        <link rel="stylesheet" href="css/confirmPopup.css">

        <!-- Mobile Top Menu -->
        <link rel="stylesheet" href="css/topmenu-mobile.css"/>

        <!-- Main Menu -->
        <link rel="stylesheet" href="css/main-menu.css"/>

        <!-- Main Banner -->
        <link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

        <!-- Pomo Carousel -->
        <link rel="stylesheet" href="css/jquery.bxslider.css" type="text/css" />

        <!-- Value Added Services Carousel -->
        <link rel="stylesheet" href="css/jquery.bxslider-vas.css" type="text/css" />

        <!-- Search Box -->
        <link href="css/searh-box.css" rel="stylesheet"/>

        <!-- Common image nav slider Js Start -->
        <link rel="stylesheet" href="css/responsiveslides.css"/>

        <!-- Accodian -->
        <link rel="stylesheet" href="css/jquery.ui.accordion.css" />

        <!-- LeftMenu Rightside DropDown -->
        <link rel="stylesheet" type="text/css" href="css/leftmenu-common-dropdown.css" />

        <!-- General CSS -->
        <link href="css/reset.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>

        <!-- Mobitel Development -->
        <link href="css/mobitel.css" rel="stylesheet"/>

        <!--  <link href="css/recapture.css" rel="stylesheet"/>-->
        <!-- General JS -->
        <!--  <script type="text/javascript" src="js/jquery.min.js"></script>-->

        <!-- Responsive JS -->
        <!--<script src="js/respond.src.js"></script>-->
        <!--<script type="text/javascript" src="js/mobitel.js"></script>-->

        <!-- Calender -->
        <link href="css/jquery-ui.css" rel="stylesheet">
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui.min.js"></script>


        <!-- Calender -->

        <!-- Style Dropdown start -->
        <script type="text/javascript">
            (function($) {
                $(document).ready(function() {

                    // language Change DropDown
                    $("#textfield").click(function() {
                        $("ul.first-text").slideToggle();
                    });
                    $("ul.first-text li").click(function() {
                        var t = $(this).html();
                        $("#textfield").val(t);
                        $("ul.first-text").slideToggle();
                    });

                    // LeftMenu Rightside DropDown
                    $("#textfield-2").click(function() {
                        $("ul.left-comm-menu").slideToggle();
                    });
                    $("ul.left-comm-menu li").click(function() {
                        var t = $(this).text();
                        $("#textfield-2").val(t);
                        $("ul.left-comm-menu").slideToggle();
                    });
                    ///Start common message hide 
                    $('#success_value').show(0).delay(5000).hide(0);
                    ///End Common messsage hide
                })
            })(jQuery);
        </script>
        <!-- Style Dropdown start -->

        <!-- Mobile Search JS Start -->
        <script type="text/javascript">
            function MM_showHideLayers() { //v9.0
                var i, p, v, obj, args = MM_showHideLayers.arguments;
                for (i = 0; i < (args.length - 2); i += 3)
                    with (document)
                        if (getElementById && ((obj = getElementById(args[i])) != null)) {
                            v = args[i + 2];
                            if (obj.style) {
                                obj = obj.style;
                                v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
                            }
                            obj.visibility = v;
                        }
            }
        </script>
        <!--  <script>
              var RecaptchaOptions = {
                  theme: 'clean'
              };
          </script>-->

        <!-- load calender  for birth day-->
        <script type="text/javascript">
            var datefield = document.createElement("input");
            datefield.setAttribute("type", "date");
            if (datefield.type != "date") { //if browser doesn't support input type="date", load files for jQuery UI Date Picker
                //    document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n');
                //  document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"><\/script>\n');
                //   document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"><\/script>\n');
            }
        </script>

        <script type="text/javascript">

            jQuery(function($) {
                var date = new Date();
                var currentMonth = date.getMonth();
                var currentDate = date.getDate();
                var currentYear = date.getFullYear();//on document.ready
                $('#birthday').datepicker({
                    maxDate: new Date(currentYear, currentMonth, currentDate),
                    dateFormat: 'yy-mm-dd',
                    changeYear: true,
                    yearRange: '1900:'
                });
            });

        </script>

        <script type='text/javascript' src='/AccountMigration/dwr/interface/IsUserNameExis.js'></script>
        <script type='text/javascript' src='/AccountMigration/dwr/engine.js'></script>
        <script type="text/javascript" src="js/registrationForm.js"></script>
        <!--  <script type="text/javascript" src="js/backButtonDisable.js"></script>-->
        <!--Mobitel home link from myaccount -->
        <link href="css/home_mobitel.css" rel="stylesheet">
    </head>
    <body>
        <div class="body-wrapper"> 

            <!-- Body Container -->
            <div class="body-container">
                <div class="bg-right"> 
                    <!-- New Product -->
                    <div class="inner-plain-block">
                        <div class="row">
                            <div class="col-md-12"> 
                                <div class="col-md-2 col-lg-3 col-sm-1 inner-leftcol-main">
                                    <a href="http://www.mobitel.lk/"> <div class="ImageLoad"></div></a>
                                    <br/><br/><br/>
                                    <span style="color: red;">*&nbsp; Please enter a valid email address for future authentication and communication purposes</span></br>
                                    <span style="color: red;">It is recommended to create the User Name with alphanumeric characters as you can add multiple Mobitel numbers under one account.
                                        E.g fernando71</span>


                                </div>
                                <!-- Right Col -->
                                <div class="col-md-6 col-lg-9 inner-rightcol-main"> 

                                    <!-- Right Col Top Row -->
                                    <div class="row inner-rightcol-toprow myacc-page"> 
                                        <!-- Breadcrumb -->
                                        <div class="col-md-9">
                                            <ol class="breadcrumb left">

                                            </ol>
                                            <h3><span>To serve you better, please verify your details with a fresh user name & password.<span style="color: red">*</span></span></h3>
                                            <!-- My Account Log -->

                                        </div>
                                    </div>

                                    <!-- My Account Accordian -->

                                    <div class="acco-myacc" > 

                                        <!-- Block -->
                                        <div id="edit_div" >

                                            <div class="myacc-form-block">
                                                <div class="col-lg-12">
                                                    <div class="commonMessage"  >
                                                        <span  id="success_value">User migration Failed.</span> 
                                                        <span class="req-mark" id="userNameExits" style="display: none;">Someone already has that username. Try another?</span> 
                                                    </div>
                                                    <form class="form-horizontal" action="old_user_accounts_migration" role="form" method="post" id="reg_form" onsubmit="return registrationValidation(this);" >

                                                        <div class="form-group">
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <table>
                                                                    <tr><td><s:token/></td></tr>
                                                                </table>
                                                            </div>

                                                        </div>

                                                        <div class="form-group">
                                                            <label for="username" class="col-lg-4 col-md-3 col-sm-5 control-label">Username</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">                                                                
                                                                <s:textfield cssClass="form-control"  maxLength="14" id="userName" name="userName" value="%{userName}" placeholder="Enter text here" onblur="usernameValidation(this.value);"/>
                                                                <s:hidden name="mobile_number" value="%{mobile_number}" />
                                                                <span class="req-mark">*</span> 
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidUserNAme"/></span> 
                                                            </div>

                                                        </div>
                                                        <div class="form-group" style="display: none;" id="username_validation">
                                                            <label for="username" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_username"  class="error_class" >Please enter user name</span>
                                                                <span id="invalid_username"  class="error_class" >Username can contain only alphanumerical characters(A-Z, a-z, 0-9) without space,length should be greater than 5 and less than 15 characters</span>

                                                            </div>

                                                        </div>


                                                        <!--
                                                    <div class="form-group">
                                                        <label for="mobileNumber" class="col-lg-4 col-md-3 col-sm-5 control-label">Mobile Number</label>
                                                        <div class="col-lg-5 col-md-6 col-sm-7">
                                                        <s:textfield cssClass="form-control" id="mobileNumber" maxLength="10" name="mobileNumber" placeholder="Enter text here"/>

                                                    </div>
                                                    <div class="col-lg-2 col-md-3 col-sm-8">
                                                        <span class="req-mark"><s:property value="invalidMobileNumber"/></span> 
                                                    </div>

                                                </div>-->
                                                        <div class="form-group">
                                                            <label for="salutation" class="col-lg-4 col-md-3 col-sm-5 control-label">Salutation</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:select cssClass="form-control" name="salutation" headerValue="%{salutation}"  id="salutation" list="{'Mr.','Mrs.','Ms.','Dr.','Prof.','Ven.','Rev.','ABP.','BP.','Capt.','ADM.','VADM.','RADM.','Brig.','BG.','LtGen.','LtCol.','Lt.','MAJ.','MG.','Hon.','HE.','Col.'}"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidSalutation"/></span> 
                                                            </div>
                                                        </div>                                                     


                                                        <div class="form-group">
                                                            <label for="firstname" class="col-lg-4 col-md-3 col-sm-5 control-label">First Name</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:textfield cssClass="form-control" id="firstName" name="firstName" value="%{firstName}" placeholder="Enter text here"  onblur="firstnameValidation(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidfirstName"/></span> 
                                                            </div>
                                                        </div>
                                                        <div class="form-group" style="display: none;" id="firstname_validation">
                                                            <label for="firstname" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_firstname"  class="error_class" >Please enter your first name</span>
                                                                <span id="invalid_firstname"  class="error_class" >Please enter valid first name</span>

                                                            </div>

                                                        </div>  



                                                        <div class="form-group">
                                                            <label for="lastname" class="col-lg-4 col-md-3 col-sm-5 control-label">Last Name</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:textfield cssClass="form-control" id="lastName" name="lastName" value="%{lastName}" placeholder="Enter text here" onblur="lastnameValidation(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidlastName"/></span> 
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="lastname_validation">
                                                            <label for="lastname" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_lastname"  class="error_class" >Please enter your last name</span>
                                                                <span id="invalid_lastname"  class="error_class" >Please enter valid last name</span>

                                                            </div>

                                                        </div>     


                                                        <div class="form-group">
                                                            <label for="nic_passport" class="col-lg-4 col-md-3 col-sm-5 control-label">NIC/Passport No</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:textfield cssClass="form-control" id="nicNumber" maxLength="14"  name="nicNumber" value="%{nicNumber}" placeholder="Enter text here" onblur="nicnumberValidation(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidpassport"/></span> 
                                                            </div>
                                                        </div>    


                                                        <div class="form-group" style="display: none;" id="nic_validation">
                                                            <label for="nicpassport" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_nic"  class="error_class" >Please enter NIC number</span>
                                                                <span id="invalid_nic"  class="error_class" >Please enter valid NIC number</span>


                                                            </div>

                                                        </div>


                                                        <!--  <div class="form-group">
                                                              <label for="address1" class="col-lg-4 col-md-3 col-sm-5 control-label">Address 1</label>
                                                              <div class="col-lg-5 col-md-6 col-sm-7">
                                                        <s:textfield cssClass="form-control" id="addressLine1" name="addressLine1" placeholder="Enter text here" maxLength="25" onblur="addressline1(this.value);"/>
                                                        <span class="req-mark">*</span>
                                                    </div>
                                                    <div class="col-lg-2 col-md-3 col-sm-8">
                                                        <span class="req-mark"><s:property value="invalidAddress1"/></span> 
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="address2" class="col-lg-4 col-md-3 col-sm-5 control-label">Address 2</label>
                                                    <div class="col-lg-5 col-md-6 col-sm-7">
                                                        <s:textfield cssClass="form-control" id="addressLine2" name="addressLine2" placeholder="Enter text here" maxLength="25"  onblur="addressline2(this.value);"/>
                                                        <span class="req-mark">*</span>
                                                    </div>
                                                    <div class="col-lg-2 col-md-3 col-sm-8">
                                                        <span class="req-mark"><s:property value="invalidAddress2"/></span> 
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="address3" class="col-lg-4 col-md-3 col-sm-5 control-label">Address 3</label>
                                                    <div class="col-lg-5 col-md-6 col-sm-7">
                                                        <s:textfield cssClass="form-control" id="addressLine3" name="addressLine3" placeholder="Enter text here" maxLength="25" onblur="addressline3(this.value);"/>
                                                        <span class="req-mark">*</span>
                                                    </div>
                                                    <div class="col-lg-2 col-md-3 col-sm-8">
                                                        <span class="req-mark"><s:property value="invalidAddress3"/></span> 
                                                    </div>
                                                </div>-->
                                                        <div class="form-group">
                                                            <label for="contactno" class="col-lg-4 col-md-3 col-sm-5 control-label">Contact No</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:textfield cssClass="form-control" id="contractNumber" value="%{contractNumber}" onKeyPress="return onlyNumbers(event)"  maxLength="10" name="contractNumber" placeholder="Enter text here" onblur="contactnumberValidation(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidContratNumber"/></span> 
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="contact_validation">
                                                            <label for="contactNumber" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_contact"  class="error_class" >Please enter your contact no</span>
                                                                <span id="invalid_contact"  class="error_class" >Please enter valid contact no</span>

                                                            </div>

                                                        </div>    


                                                        <div class="form-group">
                                                            <label for="email" class="col-lg-4 col-md-3 col-sm-5 control-label">E-mail</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:textfield cssClass="form-control" id="email" name="email" placeholder="Enter text here" value="%{email}"  onblur="validateemail(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidEmail"/></span> 
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="email_validation">
                                                            <label for="emailerror" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_email"  class="error_class" >Please enter your E-mail address</span>
                                                                <span id="invalid_email"  class="error_class" >Please enter valid E-mail address</span>

                                                            </div>

                                                        </div> 


                                                        <div class="form-group">
                                                            <label for="email" class="col-lg-4 col-md-3 col-sm-5 control-label">Confirm E-mail</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:textfield cssClass="form-control" id="confirmemail" name="confirmemail" onpaste="return false;" placeholder="Enter text here" onblur="confirmvalidateemail(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3 col-sm-8 col-lg-offset-0">
                                                                <span class="req-mark"><s:property value="invalidConfirmEmail"/></span> 
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="conrfirmemail_validation">
                                                            <label for="confirmemailerror" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_confirmemail"  class="error_class" >Please confirm your E-mail address</span>
                                                                <span id="invalid_confirmemail"  class="error_class" >Please enter valid E-mail address</span>
                                                                <span id="mismatch_mail"  class="error_class" >E-mail mismatch has been detected</span>

                                                            </div>

                                                        </div>   


                                                        <div class="form-group">
                                                            <label for="language" class="col-lg-4 col-md-3 col-sm-5 control-label">Preferred language of communication</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:radio  name="language" id="language"  list ="#{'1' : ' - Sinhala', '2' : ' - Tamil', '3' : ' - English'}" value="%{language}" ></s:radio>
                                                                    <!-- <span class="req-mark">*</span>-->
                                                                </div>
                                                                <div class="col-lg-2 col-md-3 col-sm-8">
                                                                    <span class="req-mark"><s:property value="invalidlanguage"/></span> 
                                                            </div>
                                                        </div>



                                                        <div class="form-group">
                                                            <label for="password" class="col-lg-4 col-md-3 col-sm-5 control-label">Password</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:password  cssClass="form-control" id="inputPassword" name="inputPassword"  placeholder="Enter text here" onblur="passwordValidation(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span id="passstrength"></span>
                                                                <span class="req-mark"><s:property value="invalidPassword"/></span> 
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="password_validation">
                                                            <label for="pwderror" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_password"  class="error_class" >Please enter your password</span>
                                                                <span id="invalid_password"  class="error_class" >Passwords must contain at least 6 but not exceed 18 characters, including uppercase, lowercase letters and numbers without space</span>

                                                            </div>

                                                        </div>   


                                                        <div class="form-group">
                                                            <label for="confirmpassword" class="col-lg-4 col-md-3 col-sm-5 control-label">Confirm Password</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:password  cssClass="form-control" id="confirmpasswordId" name="confirmpassword" onpaste="return false;" placeholder="Enter text here" onblur="confirmpasswordFunction(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3 col-sm-8 col-lg-offset-0">
                                                                <span class="req-mark"><s:property value="invalidCocfirmPassword"/></span> 
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="confirmpassword_validation">
                                                            <label for="conpwderror" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_conpassword"  class="error_class" >Please enter your password</span>
                                                                <span id="mismatch_password"  class="error_class" >Password mismatch has been detected</span>
                                                            </div>

                                                        </div>     


                                                        <div class="form-group">
                                                            <label for="securityQuestion" class="col-lg-4 col-md-3 col-sm-5 control-label">Security Question</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">  
                                                                <s:select cssClass="form-control" id="questionList" list="questionList" headerKey="-1" headerValue="--Select--"  name="question"  >

                                                                </s:select>
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="question_validation">
                                                            <label for="questionerror" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_question"  class="error_class" >Please select a security question</span>
                                                            </div>

                                                        </div> 

                                                        <div class="form-group">
                                                            <label for="answer" class="col-lg-4 col-md-3 col-sm-5 control-label">Answer</label>
                                                            <div class="col-lg-5 col-md-6 col-sm-7">
                                                                <s:textfield cssClass="form-control" id="answer" maxLength="30" name="answer" placeholder="Enter text here" onblur="securityanswer(this.value);"/>
                                                                <span class="req-mark">*</span>
                                                            </div>
                                                            <div class="col-lg-2 col-md-3 col-sm-8">
                                                                <span class="req-mark"><s:property value="invalidAnswear"/></span> 
                                                            </div>
                                                        </div>

                                                        <div class="form-group" style="display: none;" id="securityanswer_validation">
                                                            <label for="securityAnswers" class="col-lg-4 col-md-3 col-sm-5 control-label"></label>
                                                            <div class="col-lg-8 col-md-6 col-sm-7"  >                                                                
                                                                <span id="empty_answers"  class="error_class" >Please enter your security answer</span>

                                                            </div>

                                                        </div>   

                                                        <div class="form-group">
                                                            <div class="col-lg-offset-4 col-md-offset-3 col-sm-offset-5 col-lg-5 col-md-6 col-sm-7">
                                                                <div style="height: 15px;">
                                                                    <s:submit value="Submit" cssClass="btn btn-default lblue" name="submit" id="submit">
                                                                    </s:submit>
                                                                    <button type="reset" class="btn btn-default" onclick="registrationReset();">Reset</button>
                                                                </div>
                                                            </div> 

                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-lg-offset-3 col-md-offset-3 col-sm-offset-5 col-lg-6 col-md-6 col-sm-7">
                                                                <label><span class="req">*</span> All fields are required</label>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>



                                            <!-- Left Col -->
                                            <div class="col-md-6 col-lg-3 inner-leftcol-main">
                                                <!--<div class="row leftcol-items">
                                                  <div class="col-md-4 leftmenu-leftcol left">
                                                    <h3>About Us Menu</h3>
                                                    <ul class="left-comm-menu">
                                                      <li><a href="#">Mobitel Overview</a></li>
                                                      <li><a class="active" href="#">Press &amp; Media</a></li>
                                                      <li><a href="#">The Company</a></li>
                                                    </ul>
                                                  </div>
                                                </div>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
        <!--<script src="https://code.jquery.com/jquery.js"></script> --> 
        <!-- Include all compiled plugins (below), or include individual files as needed --> 
        <script type="text/javascript" src="js/bootstrap.min.js"></script> 

        <!-- Topbar Menu JS Start --> 
        <script type="text/javascript">
                                                                        $("#top-menu-nav").addClass("js").before('<div id="top-menu"></div>');
                                                                        $("#top-menu").click(function() {
                                                                            $("#top-menu-nav").toggle();
                                                                        });
                                                                        $(window).resize(function() {
                                                                            if (window.innerWidth > 768) {
                                                                                $("#top-menu-nav").removeAttr("style");
                                                                            }
                                                                        });
        </script> 
        <!-- Topbar Menu JS End --> 

        <!-- Showup JS Start --> 
        <!--  <script src="js/jquery.min.js"></script> -->
        <script type="text/javascript" src="js/showup.js"></script> 
        <!-- Showup JS End --> 

        <!-- Main Menu JS Start --> 
        <script type="text/javascript" src="js/jquery-latest.js"></script> 
        <script type="text/javascript" src="js/jquery-migrate-1.0.0.js"></script> 
        <script type="text/javascript" src="js/menu.js"></script> 
        <!-- Main Menu JS End --> 

        <!-- Common image nav slider Js Start --> 
        <script type="text/javascript" src="js/responsiveslides.min.js"></script> 
        <script type="text/javascript">
                                                                        // You can also use "$(window).load(function() {"
                                                                        $(function() {

                                                                            // Slideshow 1
                                                                            $("#slider1").responsiveSlides({
                                                                                auto: false,
                                                                                pager: true,
                                                                                nav: true,
                                                                                speed: 500,
                                                                                maxwidth: 800,
                                                                                namespace: "centered-btns"
                                                                            });

                                                                        });
        </script> 
        <!-- Common image nav slider Js End --> 

        <!-- Value Added Services Carousels JS Start --> 
        <script src="js/jquery.bxslider.js"></script> 
        <script type="text/javascript">
                                                                        $(document).ready(function() {
                                                                            $('.slider5').bxSlider({
                                                                                slideWidth: 700,
                                                                                minSlides: 3, //2,
                                                                                maxSlides: 3,
                                                                                moveSlides: 1,
                                                                                slideMargin: 10
                                                                            });
                                                                        });
        </script> 
        <!-- Value Added Services Carousels JS End --> 

        <!-- Equal Height Columns Start - Three col Blocks --> 
        <script type="text/javascript">



            $(document).ready(function() {

                $('.threecol-block-outer').each(function() {

                    var tallest = 0;
                    var thisHeight = 0;
                    $(this).children('.column').each(function() {
                        thisHeight = $(this).height();
                        if (thisHeight > tallest) {
                            tallest = thisHeight;
                        }
                    });
                    if ($(window).width() > 480) {
                        tallest = tallest + 20;
                    } else {
                        tallest = 'auto';
                    }
                    $(this).children('.column').height(tallest);

                });


                $(window).resize(function() {
                    $('.threecol-block-outer').each(function() {
                        var tallest = 0;
                        var thisHeight = 0;
                        $(this).children('.column').each(function() {
                            thisHeight = $(this).children().height();
                            if (thisHeight > tallest) {
                                tallest = thisHeight;
                            }
                        });
                        if ($(window).width() > 480) {
                            tallest = tallest + 20;
                        } else {
                            tallest = 'auto';
                        }
                        $(this).children('.column').height(tallest);
                    });
                });

            });


        </script> 
        <!-- Equal Height Columns End - Three col Blocks --> 

        <!-- Accodian JS Start--> 
        <script type="text/javascript" src="js/jquery.ui.widget.js"></script> 
        <script type="text/javascript" src="js/jquery.ui.accordion.js"></script> 
        <script type="text/javascript">
            $(function() {
                $("div.accordian").accordion({
                    autoHeight: false,
                    collapsible: true,
                    active: false
                });

            });
            //Common Accodian
            $(".comm-acco-block div.accordian-2").accordion({
                collapsible: true
            });
            //My Account Accodian
            $(".comm-acco-block div.acco-myacc").accordion({
                collapsible: true
            });
        </script> 
        <!-- Accodian JS End--> 

        <!-- Toggles JS Start --> 
        <!-- <script type="text/javascript" src="js/toggles-min.js"></script> 
         <script type="text/javascript" src="js/toggles.js"></script> -->
        <!-- Toggles JS End -->
        <!-- Confirmation message popup -->      
    </body>
</html>
