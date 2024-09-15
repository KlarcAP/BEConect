CREATE TABLE IF NOT EXISTS "cadastroAluno" (
	"id" serial PRIMARY KEY NOT NULL,
	"nomeAluno" text NOT NULL,
	"emailAluno" varchar NOT NULL,
	"senhaAluno" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cadastroDocente" (
	"id" serial PRIMARY KEY NOT NULL,
	"nomeDocente" text NOT NULL,
	"emailDocente" varchar NOT NULL,
	"senhaDocente" varchar(256) NOT NULL
);
