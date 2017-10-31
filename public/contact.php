<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 10/12/17
 * Time: 5:56 AM
 * @Author Reid_Brownell
 * @version 1.0
 */

?>

  <section id="contact" class="bg-light">
    <div class="container">
      <h2>Contact</h2>
      <div class="row">
        <div class="col-xs-12 col-lg-6 col-md-6">
          <p>Would you like to work with me? Do you also play Destiny 2? Let’s talk!</p>
            <p class="small">All fields required.</p>
        </div><!--.col-xs-12 col-lg-6 col-md-6 end -->
      </div><!--.row end-->
        <div class="row">
            <div class="col-xs-12" id="contact-form">
                <div id="success">
                <form name="contact" id="myForm">
                    <div class="row input-pdding">
                        <div class="col-xs-12 col-sm-8 col-md-1 col-lg-1">
                            <label id="test" for="name">Name:</label>
                        </div><!-- .col-xs-12 col-sm-8 col-md-1 col-lg-1 end -->
                        <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
                            <input type="text" name="name" id="name" placeholder="Please enter your full name." required><br>
                            <label class="error" for="name" id="name-error">This field is required.</label>
                        </div><!-- .col-xs-12 col-sm-8 col-md-5 col-lg-5 end -->
                    </div><!-- .row end -->

                  <div class="row input-pdding">
                      <div class="col-xs-12 col-sm-8 col-md-1 col-lg-1">
                          <label for="email">E-mail:</label>
                      </div> <!-- .col-xs-12 col-sm-8 col-md-1 col-lg-1 end -->
                      <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
                          <input type="email" name="email" id="email" placeholder="Please enter your e-mail address" required><br>
                          <label class="error" for="email" id="email-error">This field is required.</label>
                          <label class="error" for="email" id="email-invalid">Please enter a valid email address.</label>
                      </div><!-- .col-xs-12 col-sm-8 col-md-5 col-lg-5 end -->
              </div> <!-- .row end -->

                  <div class="row input-pdding">
                      <div class="col-xs-12 col-sm-8 col-md-1 col-lg-1">
                          <label for="message">Message:</label>
                      </div><!-- .col-xs-12 col-sm-8 col-md-1 col-lg-1 end -->
                      <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
                          <textarea name="message" id="message" placeholder="What's on your mind?" required></textarea><br>
                          <label class="error" for="message" id="message-error">This field is required.</label>
                      </div><!-- .col-xs-12 col-sm-8 col-md-5 col-lg-5 end -->
                  </div><!-- .row end -->
                    <div class="row">
                        <div class="col-xs-1 col-xs-pull-4 col-sm-pull-6 col-md-pull-8 col-lg-pull-7 pull-right">
                            <input id="contact-btn" class="frm-btn" name="send" value="CONTACT" type="submit">
                        </div><!-- .col-xs-1 col-xs-pull-4 col-sm-pull-6 col-md-pull-8 col-lg-pull-7 pull-right end -->
                    </div><!-- .row end -->
                </form>
                </div><!-- #success end -->
            </div><!-- .col-xs-12 end -->
      </div><!--.row end-->
    </div><!--.container end-->
  </section><!-- #contact .bg-light end -->
