<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 8/27/17
 * Time: 1:10 PM
 */


// Create SQL query to get the list of projects
$project = "SELECT * FROM project ORDER BY date_completed DESC";
// Run the query
$projects = $conn->query($project);
//Initialize the $row variable for the do/while loop
$row = $projects->fetch_assoc();
//Initialize Variables for row loop
$pos = 0;
// Set maximum number of columns
define('COLS', 2);


?>



<section id="portfolio" class="bg-dark">
    <div class="container">
        <h2>Portfolio</h2>
            <?php
            do
            {
            if ( $pos ++ % COLS === 0 ) { ?>

        <div class="row">
            <article class="project-wrap">
                <div class="col-lg-6 col-md-6 col-sm-9 col-xs-12 proj-img">

                        <a href="<?= $row['url']; ?>"><img src="images/<?= $row['image']; ?>"
                                                           alt="an image of the <?= $row['name'] ?> project">
                        </a>
                </div><!-- .col-lg-7 col-md-7 col-sm-8 col-xs-12 proj-img end -->
                    <div class="project-content col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <a href="<?= $row['url']; ?>"><h3><?= $row['name']; ?></h3></a>
                        <p><?= $row['description']; ?></p>
                        <div class="skills-used">
                            <h4>Skills used:</h4>

						    <?php
						    // Create the variable to find the project Id to be used in the list of skills query
						    $currentProject = $row['id'];
						    //Create SQL query to get the list of skills for each project
						    $skill = "SELECT skill.skill, skill.skill_abrv, project.id FROM ((project_skill
                                INNER JOIN project ON project_skill.project_id = project.id)
                                INNER JOIN skill ON project_skill.skill_id = skill.id)
                                WHERE project.id = '$currentProject'";
						    //Run the query
						    $skills = $conn->query( $skill );
						    // Initiate variable to count total skills pulled to help with formatting
						    $rowCount = $skills->num_rows;
						    // Initialize variable for skill formatting
						    $total = 1; ?>
                            <ul class="skills">
		                        <?php while ($used = $skills->fetch_assoc() ) {
                                    if( $total ++ < $rowCount) { ?>
			                            <li><?= $used['skill_abrv']; ?>,</li>
			                        <?php } else { ?>
                                        <li><?= $used['skill_abrv']; ?></li>
                                    <?php } ?>
		                        <?php } ?>
                            </ul>
                        </div><!-- .skill-used end -->
                    </div><!-- .project-content end -->
            </article><!-- .project-wrap -->
        </div><!-- .row end -->
		    <?php
		    }
		    else {


			    ?>

        <div class="row">
            <article class="project-wrap">
                <div class="col-lg-6 col-md-6 col-sm-9 col-xs-12 pull-right proj-img">
                        <a href="<?= $row['url']; ?>"><img src="images/<?= $row['image']; ?>"
                                                           alt="an image of the <?= $row['name'] ?> project">
                        </a>
                </div><!-- .col-lg-6 col-md-6 col-sm-9 col-xs-12 pull-right proj-img end -->
                    <div class="project-content col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-right">
                    <a href="<?= $row['url']; ?>"><h3><?= $row['name']; ?></h3></a>
                        <p><?= $row['description']; ?></p>
                        <div class="skills-used">
                            <h4>Skills used:</h4>

					    <?php
					    // Create the variable to find the project Id to be used in the list of skills query
					    $currentProject = $row['id'];
					    //Create SQL query to get the list of skills for each project
					    $skill = "SELECT skill.skill, skill.skill_abrv, project.id FROM ((project_skill
                                INNER JOIN project ON project_skill.project_id = project.id)
                                INNER JOIN skill ON project_skill.skill_id = skill.id)
                                WHERE project.id = '$currentProject'";
					    //Run the query
					    $skills = $conn->query( $skill );
                        // Initiate variable to count total skills pulled to help with formatting
                        $rowCount = $skills->num_rows;
					    // Initialize variable for skill formatting
					    $total = 1; ?>
                        <ul class="skills">
		                    <?php while ($used = $skills->fetch_assoc() ) {
                                if( $total ++ < $rowCount) { ?>
                                    <li><?= $used['skill_abrv']; ?>,</li>
			                    <?php } else { ?>
                                    <li><?= $used['skill_abrv']; ?></li>
			                    <?php } ?>
		                    <?php } ?>
                        </ul>
                    </div><!-- .skill-used end -->
                </div><!-- .project-content col-lg-5 col-md-5 col-sm-6 col-xs-12 pull-right end -->
            </article><!-- .project-wrap -->
        </div><!-- .row end -->
		    <?php  }
		    }
                while($row = $projects->fetch_assoc());

                ?>

        </div><!-- .container end -->
</section><!-- #portfolio end -->


