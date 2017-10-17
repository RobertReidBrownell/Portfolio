<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 10/11/17
 * Time: 4:29 PM
 * @Author Reid_Brownell
 * @version 1.0
 */

// create the Query to list all skills
$allSkills = "SELECT skill, skill_abrv, image, priority FROM skill
              ORDER BY priority ASC";
// Run the query
$list = $conn->query($allSkills);
// Initialize the $rowSkills variable
$rowSkills = $list->fetch_assoc();

?>
<section id="skills"  class="bg-light">
    <div class="container">
        <h2>Skills</h2>
            <div class="row skill">
                <?php do { ?>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 skill-icon">
                        <div title="<?= $rowSkills['skill']; ?>">
                            <img class="img-responsive skill-img" src="images/<?= $rowSkills['image'] ?>" alt="<?= $rowSkills['skill_abrv']; ?>">
        </div>
    </div><!-- .col-lg-3 col-md-3 col-sm-6 col-xs-6 end -->

   <?php }  while($rowSkills = $list->fetch_assoc()); ?>


        </div><!-- .row end -->
    </div><!-- .container end -->
</section><!-- #skills end -->