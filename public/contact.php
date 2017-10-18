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
        <?php echo $thankYou ?>
      <div class="row">
        <div class="col-xs-12 col-lg-6 col-md-6">
          <p>Would you like to work with me? Do you also play Destiny 2? Let’s talk!</p>
            <p class="small">All fields required.</p>
        </div><!--.col-xs-12 end -->
      </div><!--.row end-->
        <div class="row">
            <div class="col-xs-12">
                <form method="post" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>">
                    <div class="row input-pdding">
                        <div class="col-xs-12 col-sm-8 col-md-1 col-lg-1">
                            <label for="fullName">Name:</label>
                        </div><!-- .col-xs-3 end -->
                        <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
                            <input type="text" name="fullName" id="fullName" placeholder="Please enter your name."><br>
                        </div><!-- .col-xs-8 end -->
                    </div><!-- .row end -->

                  <div class="row input-pdding">
                      <div class="col-xs-12 col-sm-8 col-md-1 col-lg-1">
                          <label for="email">E-mail:</label>
                      </div> <!-- .col-xs-4 end -->
                      <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
                          <input type="email" name="email" id="email" placeholder="Please enter your e-mail address"><br>
                      </div><!-- .col-xs-8 end -->
              </div> <!-- .row end -->

                  <div class="row input-pdding">
                      <div class="col-xs-12 col-sm-8 col-md-1 col-lg-1">
                          <label for="message">Message:</label>
                      </div><!-- .col-xs-4 end -->
                      <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
                          <textarea name="message" id="message" placeholder="What's on your mind?"></textarea><br>
                      </div><!-- .col-xs-8 end -->
                  </div><!-- .row end -->
                    <div class="row">
                        <div class="col-xs-1 col-xs-pull-3 col-sm-pull-5 col-md-pull-7 col-lg-pull-7 pull-right">
                            <button id="contact-form" name="send" type="submit">Send</button>
                        </div><!-- .col-xs-2 end -->
                    </div><!-- .row end -->
                </form>
            </div><!-- .col-xs-12 end -->
      </div><!--.row end-->
    </div><!--.container end-->
  </section><!-- #contact .bg-light end -->
