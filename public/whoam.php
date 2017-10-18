<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 10/3/17
 * Time: 12:10 PM
 */
?>
<section id="about" class="bg-dark">
    <div class="container">
         <div class="row">
             <div class="col-sm-8 col-sm-push-2 who-am">
                <h2>Who am I?</h2>
                    <div class="portrait"><img src="images/reidb.gif" alt="A graphic representation of Reid Brownell"></div><!-- .portrait -->

	<?php
	$whoam = "SELECT * FROM text 
                WHERE id = '6' OR id = '7'";
	$ami = $conn->query($whoam);

    while ($me = $ami->fetch_assoc()) {?>

    <p class="content"><?= $me['content'];?></p><br><br>


	<?php } ?>
             </div>     <!-- .col-sm-8 col-sm-push-2 who-am end -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</section> <!-- #about end -->