import YAML from "yaml";

interface Service {
	name?: string;
	networks?: string[];
	image?: string;
	network_mode?: string;
	restart?: string;
	volumes?: string[];
	environment?: string[];
	ports?: string[];
	configs?: any;
	secrets?: any;
}

const translations = [
	{
		regex: /(-v)|(--volume)/g,
		compose: (service: Service, value: string): Service => ({...service, volumes: [...(service.volumes || []), value]}),
	},
	{
		regex: /(-e)|(--environment)/g,
		compose: (service: Service, value: string): Service => ({...service, environment: [...(service.environment || []), value]}),
	},
	{
		regex: /--restart/g,
		compose: (service: Service, value: string): Service => ({...service, restart: value}),
	},
	{
		regex: /--name/g,
		compose: (service: Service, value: string): Service => ({...service, name: value}),
	},
	{
		regex: /(-p)|(--port)/g,
		compose: (service: Service, value: string): Service => ({...service, ports: [...(service.ports || []), value]}),
	},
];

export function dockerToCompose(dockerArguments: string[], dockerImage: string) {
	let service: Service = {
		name: undefined,
		image: dockerImage,
		networks: undefined,
		network_mode: undefined,
		restart: undefined,
		volumes: undefined,
		environment: undefined,
		ports: undefined,
		configs: undefined,
		secrets: undefined,
	};

	for (const argument of dockerArguments) {
		const type = argument.split(/\s{1}|=/g)[0];
		const value = argument
			.split(/\s{1}|=/g)
			.slice(1)
			.join("=");

		const regex = translations.find((item) => item.regex.test(type));
		if (regex) service = regex.compose(service, value);
	}

	return YAML.stringify({
		version: "3",
		services: {
			[service.name || "container"]: service,
		},
	});
}
